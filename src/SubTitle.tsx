import { FC } from 'react';
import Styles from './styles/scss/subtitle.module.scss';

type Props = {
    msg: string;
};

export const SubTitle: FC<Props> = (props) => {
    const { msg } = props;
    return <h2 className={Styles.root}>{msg}</h2>;
};
