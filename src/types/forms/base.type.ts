type BaseForm = {
    FormName: string;
    FormUrl: string;
    FormId: string;
    FormType: string;
    FormDescription?: string;
    FormFields: BaseField[];
    extraProps?: any;
}

type BaseField = {
    FieldName: string;
    FieldId: string;
    FieldType: string;
    FieldDescription?: string;
    FieldValue: string | undefined;
    FieldRequired: boolean;
}

export type { BaseForm, BaseField };