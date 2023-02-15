export const ADVANCE_FRONTEND_FEATURE = `
    const withLoading = (Component) => ({ isLoading, ...props }) => {
        return isLoading ? <Loading /> : <Component {...props} />;
    };

    const ButtonWithLoading = withLoading(Button);

    const App = () => {
        return (
            <div>
                <ButtonWithLoading isLoading={true} />
            </div>
        );
    };
`;
