import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  Configure,
  connectHits,
  connectSearchBox,
  InstantSearch,
  Highlight,
} from 'react-instantsearch-dom'
import { FaSearch } from 'react-icons/fa'
import Overlay from '../overlay'

import styles from './search.module.scss'

const client = algoliasearch('3E3W8L24GH', '115b7a2e9355c8140000a604dc059c44')

// const SearchArea = styled('div')`
//   height: 100vh;
//   margin-top: 0;
//   overflow-y: scroll;
//   padding: 3rem 5%;
//   width: 100%;
// `

// const List = styled('ul')`
//   list-style: none;
//   margin: 0 auto;
//   max-width: 650px;
//   padding: 0;
// `

// const Result = styled('li')`
//   margin-top: 2rem;
// `

// const Heading = styled('h2')`
//   font-size: 1.25rem;
//   font-weight: 600;

//   a {
//     color: ${colors.heading};
//     text-decoration: none;

//     :active,
//     :focus,
//     :hover {
//       color: ${colors.lightest};
//     }
//   }
// `

// const Link = styled('a')`
//   display: inline-block;
//   font-size: 0.75rem;
//   letter-spacing: 0.1em;
//   margin-top: 0.5rem;
//   text-decoration: none;
//   text-transform: uppercase;
// `

const Hits = connectHits(({ hits }) => (
  <ul className={styles.list}>
    {hits.map(hit => (
      <li className={styles.result} key={hit.objectID}>
        <h2 className={styles.heading}>
          <a href={`/${hit.slug}`}>
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </a>
        </h2>
        <p>
          <Highlight attribute="description" hit={hit} tagName="mark" />
        </p>
        <a href={`/${hit.slug}`} className={styles.link}>
          Read this post &rsaquo;
        </a>
      </li>
    ))}
  </ul>
))

// const OpenSearch = styled('a')`
//   align-self: center;
//   border: 2px solid transparent;
//   color: ${colors.heading};
//   height: 100%;
//   margin: 0;
//   padding: 0 0.625rem;
//   width: 2.375rem;

//   :active,
//   :focus,
//   :hover {
//     background-color: transparent;
//     color: ${colors.primaryDark};
//   }

//   :focus {
//     border: 2px solid ${colors.darkest};
//     border-radius: 0;
//   }

//   @media ${media.small} {
//     width: 2.5rem;
//   }
// `

// const Icon = styled(FaSearch)`
//   height: 100%;
//   margin: 0;
//   position: relative;
//   top: -0.125em;
// `

// const Label = styled('label')`
//   display: block;
//   margin: 0 auto;
//   max-width: 650px;
// `

// const Input = styled('input')`
//   border: 2px solid ${colors.textLight};
//   border-radius: 4px;
//   display: block;
//   font-size: 1.25rem;
//   margin-top: 0;
//   padding: 0.5rem 0.75rem;
//   width: 100%;
// `

const Search = connectSearchBox(({ currentRefinement, refine, setActive }) => (
  <form noValidate action="" role="search">
    <label htmlFor="search" className={styles.label}>
      <span>Search the Blog</span>
      <input
        type="search"
        id="search"
        value={currentRefinement}
        onBlur={() => {
          if (currentRefinement === '') {
            setActive(false)
          }
        }}
        onChange={event => {
          setActive(true)
          refine(event.currentTarget.value)
        }}
        className={styles.input}
      />
    </label>
  </form>
))

const SearchContainer = ({ children }) => (
  <div className={styles.searchContainer}>{children}</div>
)

export default () => {
  const [active, setActive] = useState(false)

  return (
    <InstantSearch
      searchClient={client}
      indexName="prod_GATSBYBLOG"
      root={{ Root: SearchContainer }}
    >
      <Configure distinct={1} />
      <a
        href="/search"
        onClick={event => {
          event.preventDefault()
          setActive(true)
        }}
        className={styles.openSearch}
      >
        <FaSearch className={styles.icon} title="Search the blog" />
      </a>
      <Overlay
        hidePopover={() => {
          setActive(false)
        }}
        visible={active}
      >
        {active && (
          <div className={styles.searchArea}>
            <Search setActive={setActive} />
            <Hits />
          </div>
        )}
      </Overlay>
    </InstantSearch>
  )
}
