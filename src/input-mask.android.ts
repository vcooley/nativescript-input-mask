import { textProperty } from 'tns-core-modules/ui/text-field/text-field-common';
import { InputMaskBase, completedProperty, extractedValueProperty, maskProperty } from './input-mask.common';

export class ValueListener implements com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener {
  // Using the @Interfaces decorator and extending java.lang.Object is not working with the ValueListener interface.
  // Causes a runtime error when instantiating inputmask.MaskedTextChangedListener
  static initWithOwner(owner: WeakRef<InputMask>): ValueListener {
    const valueListener = new com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener({
      onTextChanged: function (maskFilled: boolean, extractedValue: string) {
        const owner = this.owner.get();
        if (owner) {
          completedProperty.nativeValueChange(owner, maskFilled);
          extractedValueProperty.nativeValueChange(owner, extractedValue);
        }
      }
    });
    (valueListener as any).owner = owner;
    return valueListener as ValueListener;
  }

  owner: WeakRef<InputMask>;
  textChanged(maskFilled: boolean, extractedValue: string): void {}
}

export class InputMask extends InputMaskBase {
  valueListener: ValueListener;
  maskedTextChangedListener: com.redmadrobot.inputmask.MaskedTextChangedListener;

  constructor() {
    super();
    this.valueListener = ValueListener.initWithOwner(new WeakRef(this));
  }

  initNativeView() {
    super.initNativeView();
  }

  createNativeView() {
    const editText: android.widget.EditText = <android.widget.EditText>super.createNativeView();
    editText.removeTextChangedListener((editText as any).listener);
    return editText;
  }

  [completedProperty.setNative]() {
    // Should not be set manually
  }

  [extractedValueProperty.setNative]() {
    // Should not be set manually
  }

  [extractedValueProperty.getDefault]() {
    return '';
    // Should not be set manually
  }

  [maskProperty.setNative](mask: string): void {
    const editText = this.nativeView;
    if (this.maskedTextChangedListener) {
      editText.removeTextChangedListener(this.maskedTextChangedListener);
    }
    this.maskedTextChangedListener = new com.redmadrobot.inputmask.MaskedTextChangedListener(
      mask,
      this.autocorrect,
      editText,
      (editText as any).listener,
      this.valueListener,
    );
    editText.addTextChangedListener(this.maskedTextChangedListener);
    editText.setOnFocusChangeListener(this.maskedTextChangedListener);
    this.maskedTextChangedListener.setText(this.text);
  }

  [maskProperty.getDefault](): string {
    return '';
  }

}
