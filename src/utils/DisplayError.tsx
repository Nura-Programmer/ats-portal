import { ErrorMessage } from "@hookform/error-message";
import type { FieldErrors } from "react-hook-form";

type Props = {
  errors: FieldErrors;
  fieldName: string;
};

const DisplayError = ({ errors, fieldName }: Props) => {
  return (
    <p className="text-xs text-red-600 mt-1">
      <ErrorMessage
        errors={errors}
        name={fieldName}
        render={({ message }) => <p>{message}</p>}
      />
    </p>
  );
};

export default DisplayError;
