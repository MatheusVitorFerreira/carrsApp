import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #1E2A3A;
  padding: 20px;
  border-radius: 12px;
  color: #E0E0E0;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 12px;
  border: 1px solid #2C3E50;
  border-radius: 8px;
  background: #2C3E50;
  color: #e0e0e0ff;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #011021ff;
    box-shadow: 0 0 6px rgba(251, 253, 255, 1);
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    font-family: 'Arial', sans-serif;
    border-radius: 8px;
    border: 1px solid #444;
    background-color: #1f2a3b;
    color: #eee;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    z-index: 1000;
  }

  .react-datepicker__header {
    background-color: #2b3447;
    border-bottom: 1px solid #444;
    color: #fff;
  }

  .react-datepicker__current-month,
  .react-datepicker-year-header {
    color: #fff;
  }

  .react-datepicker__day,
  .react-datepicker__year-text {
    color: #ddd;
  }

  .react-datepicker__day:hover,
  .react-datepicker__year-text:hover {
    background-color: #3a4a63;
    color: #fff;
  }
        
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #4caf50 !important;
    color: #fff !important;             
    border-radius: 6px;                 
  }

  .react-datepicker__day--selected,
  .react-datepicker__year-text--selected {
    background-color: #4caf50 !important;
    color: #fff !important;
    border-radius: 4px;
  }
`;

export const Box = styled.div`
  background: transparent;
`;

export const BoxTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 600;
  color: #E0E0E0;
`;

export const BoxText = styled.p`
  font-size: 13px;
  color: #aaa;
  margin-bottom: 15px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #2C3E50;
  border-radius: 8px;
  background: #2C3E50;
  color: #E0E0E0;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4A90E2;
    box-shadow: 0 0 6px rgba(74,144,226,0.3);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  background: ${(props) =>
    props.secondary ? "#6c757d" : "#28a745"};
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;
