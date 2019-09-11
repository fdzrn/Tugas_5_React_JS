import React, {Component} from 'react';
import DaftarMakanan from '../Lib/DaftarMakanan';
import FormMakanan from '../Form/FormMakanan';

const listMakanan = [
	{
		Makanan: "Nasi Padang",
		Harga: 20000
	},
	{
		Makanan: "Sate Madura",
		Harga: 20000
	},
	{
		Makanan: "Soto Lamongan",
		Harga: 10000
	},
	{
		Makanan: "Nasi Uduk",
		Harga: 9000
	},
	{
		Makanan: "Nasi Kuning",
		Harga: 9000
	},
	{
		Makanan: "Ayam Geprek",
		Harga: 15000
	},
	{
		Makanan: "Pecel Lele",
		Harga: 15000
	},
	{
		Makanan: "Pecel",
		Harga: 5000
	},
	{
		Makanan: "Mie Ayam",
		Harga: 11000
	}
];
class MenuMakanan extends Component {
	render(){
		return(
			<div>
				<h3>Daftar Makanan Favorite</h3>
				<table>
					<tbody>
						<tr>
							{DaftarMakanan.map((data, index) => {
								return (
									<td key={data} >
										<img src={data.Gambar} alt="Produk Makanan" width="150" height="100" />
										<center>
											<p>{data.Makanan}</p>
											<p>Harga : Rp. {data.Harga}</p>
										</center>
									</td>
								);
							})}
						</tr>
					</tbody>
				</table>
				<h4>List Makanan</h4>
				{listMakanan.map((data, index) => {
					return (
						<div key={data} >
							<p>
								{data.listMakanan} | Harga Rp. {data.Harga} 
							</p>
						</div>
					);
				})}
				<FormMakanan />
			</div>
		);
	}
}

export default MenuMakanan;