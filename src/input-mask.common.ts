import { Property, booleanConverter } from 'tns-core-modules/ui/core/view';
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
	valueConverter: booleanConverter,
	valueChanged(target, oldValue, newValue) {
		console.log('completed property value changed', newValue);
	}
});
completedProperty.register(InputMaskBase);

export const extractedValueProperty = new Property<InputMaskBase, string>({
	name: 'extractedValue',
	defaultValue: '',
	valueChanged(target, oldValue, newValue) {
		console.log('extracted value property changed', newValue);
	}
});
extractedValueProperty.register(InputMaskBase);

export const maskProperty = new Property<InputMaskBase, string>({
	name: 'mask',
	defaultValue: '',
});
maskProperty.register(InputMaskBase);
