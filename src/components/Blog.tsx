export function Blog(props) {
    return (
        <div>
            <h5 class="text-2xl font-medium text-blue-500" style="padding-top: 15px">
                <a href={props.url} target="_blank">{props.title}</a>
            </h5>
        </div>
    );
  }
  