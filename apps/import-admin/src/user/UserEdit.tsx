import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" />
        <TextInput label="Password" source="password" />
        <div />
        <SelectArrayInput
          label="Colors"
          source="colors"
          choices={[
            { label: "Red", value: "Red" },
            { label: "Blue", value: "Blue" },
            { label: "Yellow", value: "Yellow" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
