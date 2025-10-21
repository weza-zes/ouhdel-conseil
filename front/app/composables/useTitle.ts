export const useTitle = () => {
    const setPageTitle = (title: string) => {
        useHead({
            title: `${title} | OUHDEL CONSEIL`,
        });
    };
    
    return {
        setPageTitle
    }
};
