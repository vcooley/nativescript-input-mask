import { Property } from 'tns-core-modules/ui/core/view';
import { TextField } from 'tns-core-modules/ui/text-field';

import { InputMask as InputMaskDefinition } from '.';

export abstract class InputMaskBase extends TextField implements InputMaskDefinition {

}
export const maskProperty = new Property<InputMaskBase, string>({
	name: "",
	defaultValue: "",
	valueChanged: (target, oldValue, newValue) => {

	}
});
maskProperty.register(InputMaskBase);
