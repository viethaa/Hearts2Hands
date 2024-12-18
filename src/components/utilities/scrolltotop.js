import { useEffect } from 'react';
import { useLocation, withRouter } from 'react-router';

export default function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(
        () => {window.scrollTo(0, 0);}
        , [pathname]);
    return (null);
}

