const root = document.body

const app = {
  view: () =>
    m('.page', [
      m(
        '.section header',
        m(
          '.photo',
          m('picture', [
            m('source', { media: '(min-width: 401px)', srcset: 'images/photo-big.jpg' }),
            m('source', { media: '(max-width: 401px)', srcset: 'images/photo-tall.jpg' }),
            m('img', { src: 'images/photo-small.jpg' }),
          ])
        )
      ),
      m(
        '.section content',
        m(
          '.illustration',
          m('img', {
            src: 'images/illustration-big.png',
            srcset: 'images/illustration-small.png 1x,images/ illustration-big.png 2x',
            style: { maxWidth: '500px' },
          })
        )
      ),
      m('.section sign-up', m('img', { src: 'images/sign-up.svg' })),
      m('.section feature-1', m('img', { src: 'images/feature.svg' })),
      m('.section feature-2', m('img', { src: 'images/feature.svg' })),
      m('.section feature-3', m('img', { src: 'images/feature.svg' })),
    ]),
}

m.mount(document.body, app)
