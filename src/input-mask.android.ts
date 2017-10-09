import { InputMaskBase, completedProperty, extractedValueProperty, maskProperty } from './input-mask.common';

export class ValueListener implements com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener {
	// Using the @Interfaces decorator and extending java.lang.Object is not working with the ValueListener interface.
	// Causes a runtime error when instantiating inputmask.MaskedTextChangedListener
	static initWithOwner(owner: InputMask): ValueListener {
		const valueListener = new com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener({
			onTextChanged: function (maskFilled: boolean, extractedValue: string) {
				completedProperty.nativeValueChange(owner, maskFilled);
				extractedValueProperty.nativeValueChange(owner, extractedValue);
			}
		});
		(valueListener as any).owner = owner;
		return valueListener as ValueListener;
	}

	owner: InputMask;
	textChanged(maskFilled: boolean, extractedValue: string): void {};
}

export class InputMask extends InputMaskBase {
	createNativeView() {
		const editText: android.widget.EditText = <android.widget.EditText>super.createNativeView();
		const valueListener = ValueListener.initWithOwner(this);
		const maskedTextChangedListener = new com.redmadrobot.inputmask.MaskedTextChangedListener(
			this.mask, 
			this.autocorrect,
			editText,
			(editText as any).listener,
			valueListener
		);
		(editText as any).maskedListener = maskedTextChangedListener;
		editText.addTextChangedListener(maskedTextChangedListener);
		editText.setOnFocusChangeListener(maskedTextChangedListener);
		editText.removeTextChangedListener((editText as any).listener);
		return editText;
	}

	initNativeView() {
		super.initNativeView();
		const nativeView = this.nativeView;
		(nativeView as any).maskedListener = this;
	}

}
