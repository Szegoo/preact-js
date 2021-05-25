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
                    width: 90vw;
                    margin: 0 auto;
                    text-align: center;
                }
                table > thead {
                    background-color: #141414;
                    color: white;
                    line-height: 2.5;
                }
                table > tbody {
                    line-height: 2;
                    background-color: rgb(248, 248, 248);
                }
            `}</style>
        </div>
    )
}