import { Property } from 'tns-core-modules/ui/core/view';
import { TextField } from 'tns-core-modules/ui/text-field';

import { InputMask as InputMaskDefinition } from '.';

export abstract class InputMaskBase extends TextField implements InputMaskDefinition {
	extractedValue: string;
	completed: boolean;
	mask: string;
}

export const completedProperty = new Property<InputMaskBase, boolean>({
	name: 'completed',
	defaultValue: false,
	valueChanged(target, oldValue, newValue) {

	}
});
completedProperty.register(InputMaskBase);

export const extractedValueProperty = new Property<InputMaskBase, string>({
	name: 'extractedValue',
	defaultValue: '',
	valueChanged(owner, oldValue, newValue) {

	}
});
extractedValueProperty.register(InputMaskBase);

export const maskProperty = new Property<InputMaskBase, string>({
	name: 'mask',
	defaultValue: '',
	valueChanged: (target, oldValue, newValue) => {

	}
});
maskProperty.register(InputMaskBase);
