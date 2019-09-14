# Note about creating content

## Dates

I've chosen to set all content to use the following ISO 8601 Format:

```
YYYY-MM-DDTHH:mm:ss.SSSZ
```

Reasoning:

1.  contains the maximum amount of data points necessary for ordering/formatting
    (future proofing)
1.  a format understood by [Moment.js](https://momentjs.com/docs/) which is the
    date/time lib used by [Gatsby.js](https://www.gatsbyjs.org/) and what this
    project uses for custom outputs
1.  a format that is supported by
    [Gatsby.js](https://github.com/gatsbyjs/gatsby/blob/26a50baa14845731abf2dbcb688d5d1638d05a39/packages/gatsby/src/schema/types/type-date.js#L11-L41)

For other ISO 8601 formats that Gatsby supports, see reference:
[https://github.com/gatsbyjs/gatsby/blob/26a50baa14845731abf2dbcb688d5d1638d05a39/packages/gatsby/src/schema/types/type-date.js#L11-L41](https://github.com/gatsbyjs/gatsby/blob/26a50baa14845731abf2dbcb688d5d1638d05a39/packages/gatsby/src/schema/types/type-date.js#L11-L41)
