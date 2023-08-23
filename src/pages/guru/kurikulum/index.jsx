import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'

function Kurikulum() {
    const [pilihTahun, setPilihTahun] = useState('2019')

    return (
        <Layout>
            <section className='p-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Kurikulum</h1>
                </div>

                <div className='mt-5 w-full'>
                    <div className='w-1/2'>
                        <select name="" id="" className='w-full p-2 border' onChange={(e) => setPilihTahun(e.target.value)}>
                            <option value="2019" onClick={() => setPilihTahun('2019')}>kurikulum 2019</option>
                            <option value="2020" onClick={() => setPilihTahun('2020')}>kurikulum 2020</option>
                            <option value="2021" onClick={() => setPilihTahun('2021')}>kurikulum 2021</option>
                            <option value="2022" onClick={() => setPilihTahun('2022')}>kurikulum 2022</option>
                        </select>
                    </div>

                    <div className='mt-10'>
                        <div className=' bg-white w-full shadow-lg border'>
                            <table>
                                <thead>
                                    <tr className='bg-[#16985992] text-white'>
                                        <td className='p-2'>Kerangka Dasar</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pilihTahun === '2019' ? (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe eum illo perferendis similique beatae ab tenetur exercitationem reiciendis quia odio tempora sapiente labore nesciunt, ex hic dolore nihil magnam.</td>
                                        </tr>
                                    ) : pilihTahun === '2020' ? (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, nostrum eos perferendis enim molestias similique laudantium vitae architecto nisi earum quisquam velit aperiam iusto mollitia sunt iure perspiciatis voluptas numquam? Perferendis libero reprehenderit fugiat dolorem eos, pariatur porro optio!</td>
                                        </tr>
                                    ) : pilihTahun === '2021' ? (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum exercitationem explicabo nulla, in quod vel quam mollitia omnis assumenda reprehenderit ratione tempora distinctio sapiente est hic ab soluta fugiat ipsam nihil error cum. Magnam cum maiores, nemo assumenda ea repellat sapiente, blanditiis perferendis quo deserunt laboriosam nihil! Magnam, iste!</td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error fuga placeat iste quisquam est, et excepturi? Eaque enim quo praesentium, impedit, nulla asperiores suscipit non maiores velit ab sequi? Nihil, fugit?</td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                        <div className='mt-10 bg-white w-full shadow-lg border'>
                            <table>
                                <thead>
                                    <tr className='bg-[#16985992] text-white'>
                                        <td className='p-2'>Kopetensi yang dituju</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pilihTahun === '2019' ? (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi, laborum, neque reprehenderit iste blanditiis impedit animi dolores minus laudantium in iusto. Repellendus quidem earum soluta eveniet ipsam eius voluptates obcaecati odio numquam laboriosam. Repudiandae, odit minima! Assumenda enim asperiores ullam. Commodi, eos! Alias quidem non ratione necessitatibus expedita pariatur suscipit sed recusandae rem adipisci.</td>
                                        </tr>
                                    ) : pilihTahun === '2020' ? (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed optio repudiandae modi suscipit dolorum qui tempora nam. Dolore harum natus repellat, consequuntur, voluptas quos officia odio cum maxime vitae dolores similique doloremque voluptate. A voluptates cupiditate quaerat nisi veritatis ipsa ab aliquid quae placeat, nam odit repellat nesciunt pariatur corporis rerum accusantium repudiandae iste asperiores laudantium inventore neque nihil!</td>
                                        </tr>
                                    ) : pilihTahun === '2021' ? (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel distinctio accusantium enim voluptatem eveniet dolores, minus perferendis quae reiciendis! Explicabo aperiam libero, fugiat quia, odit cum accusamus quisquam ab ipsa at officiis deserunt iusto id quas necessitatibus, corrupti consectetur voluptates quis cumque tempore esse. Non laboriosam est excepturi dolore reiciendis. Asperiores cupiditate esse quod recusandae fugiat veritatis quisquam doloribus, aut culpa at vel sed, facilis hic dolorum sit, amet quibusdam?</td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td className='p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vel ut quod voluptatibus modi reiciendis laboriosam repellat? Obcaecati, dolorum illo animi nihil inventore nesciunt iste nostrum error explicabo excepturi mollitia ipsum! Repellat voluptatibus a distinctio sit officia laudantium sapiente dolorem.</td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </section>
        </Layout >
    )
}

export default Kurikulum