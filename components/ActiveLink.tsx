import { CSSProperties, FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = (props) => {
  const { text, href } = props;
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
