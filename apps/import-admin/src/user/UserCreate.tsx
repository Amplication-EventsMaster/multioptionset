import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
