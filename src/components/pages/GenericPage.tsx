import { FC } from 'react'

type GenericPageText = {
  muffin: string
  jujubes: string
  dragee: string
  toffee: string
}

type GenericPageTextKeys = keyof GenericPageText

const genericText: GenericPageText = {
  muffin:
    'Muffin biscuit sweet chocolate danish lollipop sweet roll pastry halvah. Powder cotton candy ice cream pastry sweet sweet roll biscuit toffee tiramisu. Jelly-o sweet cookie marshmallow soufflé jelly marzipan.',
  jujubes:
    'Jujubes cupcake soufflé chocolate cake chocolate brownie donut sweet roll. Toffee icing powder bear claw cotton candy pie. Sweet dragée toffee liquorice halvah cake danish.',
  dragee:
    'Dragée oat cake bear claw sesame snaps jelly-o caramels. Danish chocolate gingerbread sugar plum muffin pastry biscuit. Sweet brownie biscuit cupcake cake. Soufflé candy gingerbread biscuit marshmallow brownie.',
  toffee:
    'Toffee sweet roll soufflé macaroon jelly beans tiramisu soufflé powder. Lemon drops bonbon cake sugar plum candy bear claw. Caramels shortbread bonbon lollipop brownie wafer carrot cake cake.',
}

const GenericPage: FC<{ title: string; text: GenericPageTextKeys }> = ({
  title,
  text,
}) => (
  <>
    <div className={'row'}>
      <div className={'col'}>
        <h1>{title}</h1>
        <figure>
          <blockquote className="blockquote">
            <p>{genericText[text]}</p>
          </blockquote>
        </figure>
      </div>
    </div>
  </>
)

export default GenericPage
