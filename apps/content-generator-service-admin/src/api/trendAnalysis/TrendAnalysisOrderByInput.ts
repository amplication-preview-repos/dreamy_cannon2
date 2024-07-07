import { SortOrder } from "../../util/SortOrder";

export type TrendAnalysisOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  keywords?: SortOrder;
  platform?: SortOrder;
  updatedAt?: SortOrder;
};
