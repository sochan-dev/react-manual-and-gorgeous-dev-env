import { FC } from 'react';
import Styles from './styles/scss/title.module.scss';

type Props = {
    msg: string;
};

export const Title: FC<Props> = (props) => {
    const { msg } = props;
    return <h1 className={Styles.root}>{msg}</h1>;
};
