import Header from "./Header";

const Layout = (props: {children:React.ReactNode}) => {
    return(
    <>
        <Header />
        <main>
            {props.children}
        </main>
    </>
    );
}

export default Layout;
