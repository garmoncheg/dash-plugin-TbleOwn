import dash_components_table_own as dto
import dash
import dash_html_components as html
import os
import pandas as pd


# Init of data file and dash
app = dash.Dash()
data_path = os.path.join(os.getcwd(), os.path.join('..', 'data'))
data_file = os.path.join(data_path, 'usa-agricultural-exports-2011.csv')
df = pd.read_csv(data_file)


def generate_table(dataframe, max_rows=10):
    """ Generates Table contents (Inner HTML)
    :param dataframe: pandas read document
    :param max_rows: maximum rows to display in the tablea
    :return: Dash by Plotly table data.
    """
    return [html.Tr([html.Th(col) for col in dataframe.columns])] + \
        [html.Tr([
            html.Td(dataframe.iloc[i][col]) for col in dataframe.columns
        ]) for i in range(min(len(dataframe), max_rows))]


# Using custom component
app.layout = html.Div(children=[
    dto.TableOwn(
        generate_table(df),
        label="US Agriculture Exports (2011)",
        id='my-table',
        wrapperClass='test-class'
    )
])


app.scripts.config.serve_locally = True
if __name__ == '__main__':
    app.run_server(debug=True)
