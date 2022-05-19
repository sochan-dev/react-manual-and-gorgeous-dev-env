import { FC } from 'react';
import { Title } from './Title';
import { SubTitle } from './SubTitle';
import Styles from './styles/scss/app.module.scss';

export const App: FC = () => (
    <div className={Styles.root}>
        <Title msg="manual development environment for React" />
        <SubTitle msg="webpack × babel typescript × eslint × prettier" />
        <SubTitle msg="gorgeous!!!" />
    </div>
);
