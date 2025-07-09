import ProductHeader from "../../components/admin/ProductHeader"
import ProductTable from "../../components/admin/ProductTable"
import ProductTableHeader from "../../components/admin/ProductTableHeader"
export default function Products() {
    return (
        <div className="admin-products">
            <ProductHeader />
            <ProductTable/>
        </div>
    )
}