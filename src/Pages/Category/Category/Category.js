import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import CategoryItems from '../CategoryItems/CategoryItems';

const Category = () => {

    const {data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
        .then(res => res.json())
    })

    return (
        <div className="mx-4 md:mx-10 lg:mx-20">
            <div className="drawer drawer-mobile">
                <input id="category-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:px-4 pb-6">
                    <CategoryItems></CategoryItems>
                </div> 

                <div className="drawer-side">
                    <label htmlFor="category-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 pt-0 w-56 md:w-64 bg-stone-300 text-base-content">
                    <div className='bg-stone-400 rounded-t-md p-3 mb-2'>
                        <h4 className='text-sm text-primary font-bold font-oswald tracking-wider uppercase text-center'>All Categories: {categories.length}</h4>
                    </div>
                        {
                            categories.map(category => <li key={category._id} className='mb-2'>
                                <Link to={`/categories/${category.category_name}`} className="font-oswald text-secondary">{category.category_name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;