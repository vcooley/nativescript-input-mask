import { textProperty } from 'tns-core-modules/ui/text-field/text-field-common'
import { InputMaskBase } from './input-mask.common';

export class InputMaskDelegateImpl extends MaskedTextFieldDelegate {
	public static ObjCProtocols = [UITextFieldDelegate];

	public static initWithOwnerAndDefault(owner: WeakRef<InputMask>, defaultImpl: UITextFieldDelegate): InputMaskDelegateImpl {
		const delegate = <InputMaskDelegateImpl>new InputMaskDelegateImpl({ format: '[000]'});
		delegate._defaultImpl = defaultImpl;
		delegate._owner = owner;
		return delegate;
	}

	private _owner: WeakRef<InputMask>;
	private _defaultImpl: UITextFieldDelegate;

	public textFieldShouldBeginEditing(textField: UITextField): boolean {
		return this._defaultImpl.textFieldShouldBeginEditing(textField);
	}

	public textFieldDidBeginEditing(textField: UITextField): boolean {
		return this._defaultImpl.textFieldShouldBeginEditing(textField);
	}

	public textFieldDidEndEditing(textField: UITextField) {
		return this._defaultImpl.textFieldDidEndEditing(textField);
	}

	public textFieldShouldClear(textField: UITextField) {
		return this._defaultImpl.textFieldShouldClear(textField);
	}

	public textFieldShouldReturn(textField: UITextField): boolean {
		return this._defaultImpl.textFieldShouldReturn(textField);
	}

	public textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean {
		const previousText = textField.text;
		super.textFieldShouldChangeCharactersInRangeReplacementString(textField, range, replacementString);
		const newText = textField.text;
		if (previousText !== newText) {
			textProperty.nativeValueChange(this._owner.get(), newText);
		}
		return false;
	}
}

export class InputMask extends InputMaskBase {
	private _delegate: InputMaskDelegateImpl;

	constructor() {
		super();
		const owner = new WeakRef(this);
		this._delegate = <InputMaskDelegateImpl>InputMaskDelegateImpl.initWithOwnerAndDefault(owner, this._delegate);
	}

}
