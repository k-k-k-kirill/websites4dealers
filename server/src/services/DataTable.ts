export interface RowMetadata {
  label: string;
  key: string;
}

class DataTable {
  metadata: RowMetadata[];
  service: any;

  constructor(metadata: RowMetadata[], service: any) {
    this.metadata = metadata;
    this.service = service;
  }

  public getColumns = () => {
    return this.metadata.map((item) => item.label);
  };

  public getKeys = () => {
    return this.metadata.map((item) => item.key);
  };

  public makeTable = async () => {
    const columns = this.getColumns();
    const rows = await this.service.getAll(this.getKeys());

    return {
      columns,
      rows,
    };
  };
}

export default DataTable;
