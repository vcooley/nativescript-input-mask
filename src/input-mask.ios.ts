import { textProperty } from 'tns-core-modules/ui/text-field/text-field-common'
import { InputMaskBase } from './input-mask.common';

class ListenerImpl extends NSObject implements MaskedTextFieldDelegateListener {
	public static ObjCProtocols = [MaskedTextFieldDelegateListener];

	public static initWithOwner(owner: WeakRef<InputMask>) {
		const listener = ListenerImpl.new() as ListenerImpl;
		listener._owner = owner;
	}

	private _owner: WeakRef<InputMask>;

	public textFieldDidFillMandatoryCharactersDidExtractValue(textField: UITextField, complete: boolean, value: string): void {
		const owner = owner.get();
	}

}

class InputMaskDelegateImpl extends MaskedTextFieldDelegate {
	public static ObjCProtocols = [UITextFieldDelegate];

	public static initWithOwnerAndDefault(owner: WeakRef<InputMask>, defaultImpl: UITextFieldDelegate): InputMaskDelegateImpl {
		const delegate = <InputMaskDelegateImpl>new InputMaskDelegateImpl({ format: '[000]{-}[AAA]'});
		delegate._defaultImpl = defaultImpl;
		delegate._owner = owner;
		delegate.listener = ListenerImpl.initWithOwner(owner);
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

	public textFieldShouldClear(textField: UITextField): boolean {
		return this._defaultImpl.textFieldShouldClear(textField);
	}

	public textFieldShouldReturn(textField: UITextField): boolean {
		return this._defaultImpl.textFieldShouldReturn(textField);
	}

	public textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean {
		const owner = this._owner.get();
		const previousText = textField.text;
		super.textFieldShouldChangeCharactersInRangeReplacementString(textField, range, replacementString);
		const newText = textField.text;
		if (owner && previousText !== newText) {
			textProperty.nativeValueChange(owner, newText);
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
