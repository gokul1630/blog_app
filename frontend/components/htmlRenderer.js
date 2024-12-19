const HtmlRenderer = ({ html, className }) => {
    return (
        <div>
            <iframe srcDoc={html} className={className}  />
        </div>
    );
};

export default HtmlRenderer;
