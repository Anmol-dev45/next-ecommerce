import { useState, useEffect } from "react";

type FormStatus = {
    pending: boolean;
};

export function useFormStatus(): FormStatus {
    const [pending, setPending] = useState<boolean>(false);

    useEffect(() => {
        const handleStart = () => setPending(true);
        const handleEnd = () => setPending(false);

        document.addEventListener("formstart", handleStart);
        document.addEventListener("formend", handleEnd);

        return () => {
            document.removeEventListener("formstart", handleStart);
            document.removeEventListener("formend", handleEnd);
        };
    }, []);

    return { pending };
}