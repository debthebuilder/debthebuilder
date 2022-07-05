const Layout = ({ children }) => {
    return(
        <div className='bg-white w-full p-5 dark:bg-black' uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 00">
            {children}
        </div>
    )
}

export default Layout;