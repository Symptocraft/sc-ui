import { toast } from "react-toastify";

function Notify(res: any) {
    if (res.status === 200) {
        toast.success("Success",{
            position:"bottom-right",
            className:"toast-sucess"
        });
    } else {
        toast.error("Error",{
            position:"bottom-right",
            className:"toast-fail"
        });
    }
}

export default Notify;
