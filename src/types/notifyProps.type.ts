import { TypeOptions, ToastPosition } from "react-toastify";
type NotifyProps = {
    message: string;
    type: TypeOptions;
    position: string | ToastPosition;
    className: string;
}

export type { NotifyProps };