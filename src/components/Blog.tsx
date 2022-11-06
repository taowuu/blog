export function Blog(props) {
    return (
        <div>
            <h3 class="text-2xl font-medium text-blue-500" style="padding-bottom: 13px">
                <a href={props.url} target="_blank">{props.title}</a>
            </h3>
        </div>
    );
  }
  