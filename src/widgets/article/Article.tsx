import '@/widgets/article/styles/article.css';

type ArticleProps = {
    title: string;
    paragraphs: string[];
};

const Article = (props: { props: ArticleProps }) => {
    const { title, paragraphs } = props.props;
    return (
        <div className="article">
            <div className="article_title">
                <h2 className="article_title__h2">{title}</h2>
            </div>
            <div className="article_text">
                {paragraphs.map((p, i) => {
                    return (
                        <div className="article_text__p" key={i}>
                            {p.includes('<') && p.includes('</') ? (
                                <div className="html_container" dangerouslySetInnerHTML={{ __html: p }}></div>
                            ) : (
                                p
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { Article };
