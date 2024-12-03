import React from "react";
import styled from "styled-components";

const RepoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  transition: all 0.3s ease;
  flex: 1 1 calc(50% - 2rem);
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
`;

const RepoTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.2rem;

  a {
    color: #8888ff;
    text-decoration: none;

    &:hover {
      color: #aaaaff;
    }
  }
`;

const Language = styled.span`
  background: rgba(46, 160, 67, 0.15);
  color: #2ea043;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: #a0a0cc;
  margin: 1rem 0;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const RepoFooter = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ProjectButton = styled(Button)`
  background: rgba(136, 136, 255, 0.1);
  color: #8888ff;

  &:hover {
    background: rgba(136, 136, 255, 0.2);
  }
`;

const RepoButton = styled(Button)`
  background: rgba(255, 255, 255, 0.05);
  color: #e0e0ff;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default function Repo({ data }) {
  return (
    <RepoCard>
      <div>
        <RepoTitle>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            {data.name}
          </a>
        </RepoTitle>
        {data.language && <Language>{data.language}</Language>}
        {data.description && <Description>{data.description}</Description>}
      </div>
      <RepoFooter>
        <RepoButton
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Repository
        </RepoButton>
        {data.homepage && (
          <ProjectButton
            href={data.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
              <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
            </svg>
            Live Demo
          </ProjectButton>
        )}
      </RepoFooter>
    </RepoCard>
  );
}
