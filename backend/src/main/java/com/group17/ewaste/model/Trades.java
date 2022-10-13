package com.group17.ewaste.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "completedtrades")


public class Trades {

		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "tradeId")
		private Long tradeId;
		
		@Column(name = "tradeeName")
		private String tradeeName;
		
		@CreationTimestamp
		@Column(name = "date")
	    @Temporal(TemporalType.TIMESTAMP)
	    @CreatedDate
		private Date date;
		
		@Column(name = "tradeeItemName")
		private String tradeeItemName;
		
		@Column(name = "traderItemName")
		private String traderItemName;
		
		@Column(name = "traderName")
		private String traderName;
		
		@Column(name = "traderId")
		private Long traderId;
		
		@Column(name = "tradeeId")
		private Long tradeeId;
		
		@OneToMany(mappedBy = "tradeid", cascade = CascadeType.ALL)
		private List<Report> report;
		
		public Trades() {
			
		}

		public Trades(Long tradeId, String tradeeName, Date date, String tradeeItemName, String traderItemName,
				String traderName, Long traderId, Long tradeeId) {
			super();
			this.tradeId = tradeId;
			this.tradeeName = tradeeName;
			this.date = date;
			this.tradeeItemName = tradeeItemName;
			this.traderItemName = traderItemName;
			this.traderName = traderName;
			this.traderId = traderId;
			this.tradeeId = tradeeId;
		}

		public Long getTradeId() {
			return tradeId;
		}

		public void setTradeId(Long tradeId) {
			this.tradeId = tradeId;
		}

		public String getTradeeName() {
			return tradeeName;
		}

		public void setTradeeName(String tradeeName) {
			this.tradeeName = tradeeName;
		}

		public Date getDate() {
			return date;
		}

		public void setDate(Date date) {
			this.date = date;
		}

		public String getTradeeItemName() {
			return tradeeItemName;
		}

		public void setTradeeItemName(String tradeeItemName) {
			this.tradeeItemName = tradeeItemName;
		}

		public String getTraderItemName() {
			return traderItemName;
		}

		public void setTraderItemName(String traderItemName) {
			this.traderItemName = traderItemName;
		}

		public String getTraderName() {
			return traderName;
		}

		public void setTraderName(String traderName) {
			this.traderName = traderName;
		}

		public Long getTraderId() {
			return traderId;
		}

		public void setTraderId(Long traderId) {
			this.traderId = traderId;
		}

		public Long getTradeeId() {
			return tradeeId;
		}

		public void setTradeeId(Long tradeeId) {
			this.tradeeId = tradeeId;
		}

		
}
		
		
