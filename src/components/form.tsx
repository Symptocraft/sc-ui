import { FormEvent, useState } from "react";
import { BaseForm } from "../types/forms/base.type";
import APIInterface from "../api/interface";
import { NotifyProps } from "../types/notifyProps.type";
import { toast, TypeOptions, ToastPosition } from "react-toastify";
import { ApiResponseObj } from "../types/api/interface.type";

function FormComponent (formData: BaseForm) {
    const [fieldData, setFieldData] = useState();

    const showToastMessage = (res:NotifyProps) => {
        toast(res.message, {
            type: res.type,
            position: res.position as ToastPosition,
            className: res.className
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const fieldData: any = {};
        formData.forEach((value, key) => {
            fieldData[key] = value;
        })
        setFieldData(fieldData);
        submitRequest(fieldData);
    }
    
    const submitRequest = async (fieldData: any) => {
        await APIInterface({
            url: formData.FormUrl,
            method: "POST",
            data: fieldData,
            headers: {}
        }).then((res:ApiResponseObj) => {
            const type = res.status === 200? 'success' : 'error';
            const toastMes = {
                message: res.data.message,
                type: type as TypeOptions,
                position: "top-right",
                className: "toastMessage"
            }
            showToastMessage(toastMes);
            if(res.status === 200){
                formData.extraProps.handleLoginState(true);
            }
        }
        ).catch((err) => {
            const toastMes = {
                message: err.message,
                type: "error" as TypeOptions,
                position: "top-right",
                className: "toastMessage"
            }
            showToastMessage(toastMes);
        });
    }


    return (
        <form onSubmit={handleSubmit}>
            {formData.FormFields.map((field, index) => {
                return (
                    <div className="fieldGroup" key={index}>
                        {field.FieldType !== "submit" && <label htmlFor={field.FieldId}>{field.FieldName}</label>}
                        {field.FieldType !== "textarea" && <input type={field.FieldType} id={field.FieldId} name={field.FieldId} required={field.FieldRequired} />}
                        {field.FieldType === "textarea" && <textarea id={field.FieldId} name={field.FieldId} required={field.FieldRequired} />}
                    </div>
                )
            })}
        </form>
    )
}

export default FormComponent;