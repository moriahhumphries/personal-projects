const p1 = <p id="large">foo</p>

const p2 = <p id="small">bar</p>

const myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
)

const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
        <h1>
            Welcome to Dan's Blog!
        </h1>
        <article>
            Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
        </article>
    </div>
);

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

const myList = (
    <ul>
        <li>Cats</li>
        <li>More Cats</li>
        <li>Moriah's Cats</li>
    </ul>
);

ReactDOM.render(
    myList,
    document.getElementById('app')
);

const myDiv = <div className="big">I AM A BIG DIV</div>

ReactDOM.render(
    myDiv,
    document.getElementById('app')
);

let math = <h1>2 + 3 = {2 + 3}</h1>
ReactDOM.render(
    math,
    document.getElementById('app')
);

class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}


ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
);

class QuoteMaker extends React.Component {
    render() {
        return (
            <blockquote>
                <p>
                    What is important now is to recover our senses.
                </p>
                <cite>
                    <a target="_blank"
                       href="https://en.wikipedia.org/wiki/Susan_Sontag">
                        Susan Sontag
                    </a>
                </cite>
            </blockquote>
        );
    }
}