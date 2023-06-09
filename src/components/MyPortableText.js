import React from "react";
import ParagraphText from "./typography/ParagraphText";
import { Title } from "./typography/Title";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from 'react-markdown';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import UseImagePath from './getPath'
import { GatsbyImage } from "gatsby-plugin-image";

function MyPortableText({ value }) {
    
  const renderers = {
    p: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
    img: ({ alt, src }) => {
        if (src.startsWith("http") || src.startsWith("//")) {
          // Remote image URL, render as a regular `img` tag
          return <img src={src} alt={alt} />;
        } else {
            console.log(src)
            const image = UseImagePath(src);
            return <GatsbyImage image={image} alt={alt} />;
        }
      },
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus} // theme
          language={match[1]}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return <ReactMarkdown children={value} components={renderers} />;
}

export { MyPortableText };
