import { Button } from "@mui/material";

type ButtonProps = {
  type?:any;
  label: string;
  onClick: (...args: any[]) => any;
};

export default function PrimaryButton(props: ButtonProps) {
  const {type, label, onClick } = props;

  return (
    <Button type={type} className='my-2 rounded-5 btn_primary' sx={{background:'#235923'}} variant="contained" color="primary" fullWidth onClick={onClick}>
      {label}
    </Button>
  );
}
