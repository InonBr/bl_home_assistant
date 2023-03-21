import { Form } from "react-bootstrap";
import { RadioComponentProps } from "../interfaces/formInterfaces";
import { useState } from "react";

const RadioButtons = ({ setSearchType, radioId }: RadioComponentProps) => {
  const [markedButtons, setMarkedButtons] = useState({
    equal: true,
    startWith: false,
    endWith: false,
    middle: false,
  });

  const handleRadioChange = (value: "eq" | "sw" | "ew" | "mi") => {
    setSearchType(value);
    setMarkedButtons({
      equal: value === "eq",
      startWith: value === "sw",
      endWith: value === "ew",
      middle: value === "mi",
    });
  };

  return (
    <div id={radioId} key={radioId} className="mb-2 mt-2">
      <Form.Check
        itemID={`${radioId}-equal`}
        inline
        label="Equal"
        name="equal"
        id={`${radioId}-equal`}
        type="radio"
        onChange={() => handleRadioChange("eq")}
        checked={markedButtons.equal}
      />
      <Form.Check
        itemID={`${radioId}-startWith`}
        inline
        label="Start With"
        name="startWith"
        id={`${radioId}-startWith`}
        type="radio"
        onChange={() => handleRadioChange("sw")}
        checked={markedButtons.startWith}
      />
      <Form.Check
        inline
        label="End With"
        id={`${radioId}-endWith`}
        name="endWith"
        type="radio"
        onChange={() => handleRadioChange("ew")}
        checked={markedButtons.endWith}
      />
      <Form.Check
        inline
        label="Middle"
        id={`${radioId}-middle`}
        name="middle"
        type="radio"
        onChange={() => handleRadioChange("mi")}
        checked={markedButtons.endWith}
      />
    </div>
  );
};

export default RadioButtons;
