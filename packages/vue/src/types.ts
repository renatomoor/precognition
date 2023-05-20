import { Config, NamedInputEvent } from 'laravel-precognition'

export interface Form<Data extends Record<string, unknown>> {
    processing: boolean,
    validating: boolean,
    touched(name: keyof Data): boolean,
    data(): Data,
    errors: Partial<Record<keyof Data, string>>,
    hasErrors: boolean,
    valid(name: keyof Data): boolean,
    invalid(name: keyof Data): boolean,
    validate(name: keyof Data|NamedInputEvent): Data&Form<Data>,
    setErrors(errors: Partial<Record<keyof Data, string|string[]>>): Data&Form<Data>
    setValidationTimeout(duration: number): Data&Form<Data>,
    submit(config?: Config): Promise<unknown>,
    reset(...keys: (keyof Partial<Data>)[]): Data&Form<Data>,
}