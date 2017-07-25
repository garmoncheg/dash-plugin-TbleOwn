import dash_components_table_own as dto
import dash
import dash_html_components as html

import pandas as pd

df = pd.read_csv(
    'https://gist.githubusercontent.com/chriddyp/'
    'c78bf172206ce24f77d6363a2d754b59/raw/'
    'c353e8ef842413cae56ae3920b8fd78468aa4cb2/'
    'usa-agricultural-exports-2011.csv')

app = dash.Dash('')


def generate_table(dataframe, max_rows=10):
    return [html.Tr([html.Th(col) for col in dataframe.columns])] + \
        [html.Tr([
            html.Td(dataframe.iloc[i][col]) for col in dataframe.columns
        ]) for i in range(min(len(dataframe), max_rows))]


app = dash.Dash()

app.layout = html.Div(children=[
    dto.TableOwn(generate_table(df), label="US Agriculture Exports (2011)", id='my-table', wrapperClass='test-class')
])

app.scripts.config.serve_locally = True

if __name__ == '__main__':
    app.run_server(debug=True)

