import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
  } from '@carbon/react';

export default function Groupwise_DOJ_DOL_Table(newdata){
    return(
        <>
        {newdata.length===0?(
            <div style={{display:"flex",height:"100%",alignItems:"center",justifyContent:"center"}}>
            Nothing to display as no employees have joined in the company
            the company
        </div>
        ):(
                <div style={{height:"100%",width:"100%",overflow:"scroll",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <DataTable headers={newdata.headers} rows={newdata.rows}>
                        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                            <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                {headers.map((header) => (
                                    <TableHeader {...getHeaderProps({ header })}>
                                    {header.value}
                                    </TableHeader>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <TableRow {...getRowProps({ row })}>
                                    {row.cells.map((cell) => (
                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                    ))}
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        )}
                    </DataTable>
                </div>
        )}
        </>
    )
}