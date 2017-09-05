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
		console.log('should begin')

		return this._defaultImpl.textFieldShouldBeginEditing(textField);
	}

	public textFieldDidBeginEditing(textField: UITextField): boolean {
		console.log('did begin')

		return this._defaultImpl.textFieldShouldBeginEditing(textField);
	}

	public textFieldDidEndEditing(textField: UITextField) {
		console.log('did end')

		return this._defaultImpl.textFieldDidEndEditing(textField);
	}

	public textFieldShouldClear(textField: UITextField) {
		console.log('should clear')

		return this._defaultImpl.textFieldShouldClear(textField);
	}

	public textFieldShouldReturn(textField: UITextField): boolean {
		console.log('should return')

		return this._defaultImpl.textFieldShouldReturn(textField);
	}

	public textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean {
		console.log('should change')
		const shouldChange = super.textFieldShouldChangeCharactersInRangeReplacementString(textField, range, replacementString);
		if (shouldChange) {
			this._defaultImpl.textFieldShouldChangeCharactersInRangeReplacementString(textField, range, replacementString);
		}
		return true;
	}
}

export class InputMask extends InputMaskBase {
	private _delegate: InputMaskDelegateImpl;

	constructor() {
		super();
		const owner = new WeakRef(this);
		console.log('laskdfj')
		this._delegate = <InputMaskDelegateImpl>InputMaskDelegateImpl.initWithOwnerAndDefault(owner, this._delegate);
	}

}
