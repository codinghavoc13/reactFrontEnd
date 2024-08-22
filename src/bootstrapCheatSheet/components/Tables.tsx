// import React from 'react';

export const Tables = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Tables</h1>
            {/* <!--danger, success, primary, etc all work with tables as well--> */}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Tony</td>
                        <td>Stark</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Steve</td>
                        <td>Rogers</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Thor</td>
                        <td>Odinson</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>Bruce</td>
                        <td>Banner</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>Nick</td>
                        <td>Fury</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>Natasha</td>
                        <td>Romanoff</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>Clint</td>
                        <td>Barton</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}