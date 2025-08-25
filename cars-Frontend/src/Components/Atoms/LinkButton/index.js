import { ButtonLink } from './styles';

function LinkButton({ to, children, variant }) {
  return <ButtonLink to={to} variant={variant}>{children}</ButtonLink>;
}

export default LinkButton;
