export default () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Peter</td>
                        <td>peter@gmail.com</td>
                        <td>address 1</td>
                        <td>555-134</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter</td>
                        <td>peter@gmail.com</td>
                        <td>address 1</td>
                        <td>555-134</td>
                    </tr>
                </tbody>
            </table>
            <style>{`
                table {
                    border-collapse: collapse;
                }

                th, td {
                    border: 1px solid black;
                    padding: 0.3em 0.5em;
                }


                table {
                    width: 100%;
                }

                @media (max-width: 30em) {
                    table, thead, tbody, tr, th, td {
                        display: block;
                    }

                thead tr {
                    position: absolute;
                    top: -9999px;
                    left: -9999px;
                }

                tr {
                    margin-bottom: 1em;
                }
            }
            `}</style>
        </div>
    )
}